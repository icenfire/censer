import { db } from "../firebase";

test("firebase db access test", () => {
  const datesDb: any = [];
  db.collection("dates").onSnapshot(
    (snapshot: any) => {
      snapshot.forEach((doc: any) => {
        //expect(doc.length.data().date).toBeGreaterThan(1);
        datesDb.push(doc.data().date);
      });
      expect(datesDb).toEqual(["12.05.2019", "19.09.2019"]);
    },
    err => {
      console.log("error", err);
    }
  );
});
