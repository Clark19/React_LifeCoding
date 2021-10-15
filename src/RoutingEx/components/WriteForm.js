
import {useRef} from 'react'
import {useHistory} from "react-router-dom";
import Params from './Params';

export default function WriteForm() {
  const history = useHistory();
  const titleRef = useRef();
  const bodyRef = useRef();

  const onSubmit = e => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    const writeQuery = `/view?${Params.Writing_KEY_TITLE}=${title}&${Params.Writing_KEY_BODY}=${body}`;
    history.push(writeQuery)
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="title">글 제목</label>
          <input type="title" id="title" name="title"
            ref={titleRef} placeholder="글 제목 입력"
            autoComplete="off" required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="body">글 내용</label>
          <input type="body" id="body" name="body"
            ref={bodyRef} placeholder="Enter body." required
          />
        </fieldset>
        <button type="submit" onClick={onSubmit}>
          글 제출
        </button>
      </form>
    </div>
  );
}
