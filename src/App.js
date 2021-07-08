import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { firestore } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import { loadBucketFB } from "./redux/modules/bucket";

import Header from "./components/Header";
import BucketList from "./components/BucketList";
import Input from "./components/Input";
import Detail from "./components/Detail";
import Unfound from "./components/Unfound";
import Spinner from "./components/Spinner";

const App = () => {
  const dispatch = useDispatch();
  const _bucket = useSelector((state) => state.bucket);
  useEffect(() => {
    // const bucket = firestore.collection("bucket");
    // bucket
    //   .doc("bucket_item")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc.data());
    //     }
    //   });
    // bucket.get().then((docs) => {
    //   let bucket_data = [];
    //   docs.forEach((doc) => {
    //     if (doc.exists) {
    //       bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
    //     }
    //   });
    //   console.log(bucket_data);
    // });
    // bucket.add({ text: "수영배우기", completed: false });
    // bucket.doc("bucket_item").update({ text: "수영안하기", completed: true });
    // bucket.doc("bucket_item").delete([document.id])  //삭제하기
    dispatch(loadBucketFB());
    console.log("아령하세여");
  }, []);

  return (
    <React.Fragment>
      {!_bucket.is_loaded ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={BucketList} />
            <Route path="/detail:index" component={Detail} />
            <Route component={Unfound} />
          </Switch>
          <Input />
        </div>
      )}
    </React.Fragment>
  );
};
export default withRouter(App);
