"Use Client";
import "./login.page.scss";
import Checkbox from "@/src/components/Checkbox";
import Radio from "@/src/components/Radio";
import ContentHeader from "@/src/components/ContentHeader";

export default function Home() {
  const title = "로그인";
  const headcopy = ""
  return (
    <div className="content login">
      <ContentHeader h3={title} p={headcopy}/>
      <section>
        <form action={""} method="">
          <div className="input-group-id">
            <label htmlFor="id">이메일</label>
            <input type="text" id="id" name="id" placeholder="example@shammah.co.kr" />
            <Checkbox label="이메일저장"/>
          </div>
          <div className="input-group-pw">
            <label htmlFor="pw">비밀번호</label>
            <input type="password" id="pw" name="pw" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className="input-group-autoLogin">
            <Checkbox label="자동로그인"/>
          </div>
          <div className="input-group-saveId">
            
          </div>
          <div className="input-group-savePw">
          </div>
          <div className="input-group-login">
            <button type="submit">로그인</button>
          </div>
          <div className="input-group-find">
            <a href="/findId">아이디 찾기</a>
            <a href="/findPw">비밀번호 찾기</a>   
          </div>
          
        </form>
        <div>
          <button type="button">카카오톡</button>
          <button type="button">카카오톡</button>
          <button type="button">카카오톡</button>
        </div>
      </section>
    </div>
  );
}
