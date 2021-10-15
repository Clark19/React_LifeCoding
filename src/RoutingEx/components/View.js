import {Link, Redirect, useLocation} from "react-router-dom";
import Params from './Params';

function View() {
  // get방식으로 url 에 전달된 쿼리 스트링을(query parameters)을 받아오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get(Params.Writing_KEY_TITLE);
  const body = searchParams.get(Params.Writing_KEY_BODY);

  if (!title || !body)
    return <Redirect to="/write" />;

  return (
    <>
      <Link to='/'>메인 페이지로</Link>

      <h2>글 보기</h2>
      <h3> 글 제목: <em>{title}</em></h3>
      <p>글 내용: <strong>{body}</strong></p>
    </>
  );
}

export default View;
