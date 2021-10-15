import { NavLink } from "react-router-dom";

export function TopMenu() {
  return <nav>
    <ul>
      {/* <NavLink>는 <Link>에 기능을 조금 더한거. 주로 메뉴(네비게이션) 용도로 사용.
          <a> 태그를 대체하고, a 태그의 href 속성을 to로 바꾸면 됨.
      */}
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/write">글쓰기</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>;
}

export default TopMenu;