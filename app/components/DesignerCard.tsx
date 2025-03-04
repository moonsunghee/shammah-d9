import "./designerCard.scss";
export default function DesignerCard() {
  const isHired = true;
  return (
    <article className="designer-card-wrap">
      <div className="designer-card__left">
        <div className="designer-image"></div>
        <ul className="designer-position">
          <li>고급 FE 개발자</li>
        </ul>
        <h4 className="designer-name">홍길동</h4>
        <div className="designer-button">
          <button>근로상태</button>
        </div>
      </div>
      {isHired &&
      <div className="designer-card__right">
        <div className="designer__header">
          <div className="designer-duedate">2024-11-08 ~ 2025-05-23</div>
          <div className="designer-restday">{0} / {43} day</div>
        </div>
        <ul className="designer-schedule">
          <li><span>{'일'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'월'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'화'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'수'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'목'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'금'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
          <li><span>{'토'}요일</span><span>09:00</span>~<span></span>13:00<span>({4}H)</span></li>
        </ul>
        <div className="designer-button">
          <button>디자이너 채팅</button>
        </div>
        
      </div>
      }
    </article>
  );
}
