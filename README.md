### 버킷리스트

(링크)
https://sparta-react-c254d.firebaseapp.com/
------

#### Overview
![image](https://user-images.githubusercontent.com/71649055/124866311-2aa05980-dff7-11eb-802f-218091c948c4.png)

#### 기술
React.js, styled-components, firestore, redux

####  Redux를 사용한 상태관리방법
기존 state로만 데이터들을 관리할 때, 컴포넌트에서 데이터의 이동이 제한되는 경우가 많않다. 하지만 Redux를 통해 전역적으로 데이터들을 관리하면 이 문제점이 해결되었다.
```
// 액션
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";


// 액션생성함수
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};

export const updateBucket = (bucket) => {
  return { type: UPDATE, bucket };
};

// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      if (action.bucket.length > 0) {
        return { list: action.bucket, is_loaded: true };
      }

      return state;
    }

    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, idx) => {
        if (idx !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };

    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket) {
          return { ...l, completed: true };
        }
        return l;
      });
      // console.log(bucket_list); [{},{},{}] 형태
      return { list: bucket_list };
    }

    case "bucket/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }

```

액션 정의 -> 액션 생성함수 생성 -> 리듀서를 통해 상태관리가 일어난다.


#### Firebase 를 통한 서버괸리와 호스팅 (서버리스)
firebase의 firesotre에 서버를 쉽게 저장할 수 있었고, 호스팅도 매우 간편하게 할 수 있다.
