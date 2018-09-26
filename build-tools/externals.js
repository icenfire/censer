module.exports = {
  getTags: (externals, versions, mode) => {
    const tags = [];
    for (const ext in externals) {
      let version = versions[ext];
      if (version === undefined) {
        throw new Error(
          `Unexpected external dependency: ${ext}. Please make sure ${ext} is added as a dependency in package.json.`
        );
      }

      const url = externals[ext].link
        .replace(/{version}/g, version)
        .replace(/{mode}/g, externals[ext].mode(mode));

      tags.push(`<script crossorigin src="${url}"></script>`);
    }

    return tags.join("\n");
  },

  getDefs: externals => {
    return Object.keys(externals).reduce((result, key) => {
      result[key] = externals[key].def;
      return result;
    }, {});
  }
};
