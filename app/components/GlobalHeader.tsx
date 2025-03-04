import Image from "next/image";
import Link from "next/link";
import { FaCircleUser, FaComment } from "react-icons/fa6";

export default function GlobalHeader() {
  const loggined = true;
  const userPhoto = false;
  return (
    <div className="global-header">
      <header>
        <nav className="gnb">
          <h1 className="logo"><Link href="/">SHAM<span>MAH</span></Link></h1>
          {loggined &&
            <ul className="navi">
              <li><Link href={"/designerList"}>디자이너 찾기</Link></li>
              <li><Link href={"/companyHiredDesigner"}>고용중인 디자이너</Link></li>
              <li><Link href={"/progressSituation"}>프로젝트 현황</Link></li>
            </ul>
          }
        </nav>

        <nav className="util">
          {loggined ?
            <ul className="navi">
              <li><Link href={""}><FaComment/></Link></li>
              <li>{userPhoto ? 
                <Link href={""}><Image width={36} height={36} src={"/"} alt=""/></Link>
                : 
                <Link href={""}><FaCircleUser className="circleUser"/></Link>}
              </li>
            </ul> 
          : 
            <ul className="navi">
              <li className="login"><Link href={"/login"}>로그인</Link> / <Link href={""}>회원가입</Link></li>
              <li className="signup"><Link href={""}><button>기업회원가입</button></Link></li>
            </ul> 
          }
          
        </nav>
      </header>
    </div>
  );
}
