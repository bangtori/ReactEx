const data = {
  tori: {
    name: "방유빈",
    description: "iOS 개발자인디요.",
  },
  gildong: {
    name: "홍길동",
    description: "아버지를 아버지라 부르지 못하고..",
  },
};

import React from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();

  const showDetail = searchParams.get("detail");
  const profile = data[username];
  if (!profile) {
    return <>존재하지 않는 사용자 입니다.</>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default Profile;
