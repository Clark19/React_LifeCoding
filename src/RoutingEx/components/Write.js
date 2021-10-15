// 필요한 모듈을 추가로 import하세요.
import WriteForm from './WriteForm'
import TopMenu from './TopMenu'

export function Write() {
  return (
    <div>
      <TopMenu />
      {/* <Link to='/'>메인 페이지로</Link> */}
      <h2>글을 쓰세요</h2>
      <WriteForm />
    </div>
  );
}


