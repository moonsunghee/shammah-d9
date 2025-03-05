import ContentHeader from "@/src/components/ContentHeader";
import DesignerCard from "@/src/components/DesignerCard";

export default function Page() {
  return (
      <div className="content designer-list">
        <ContentHeader h3={"디자이너 찾기"} p={"우리 회사에 필요한 디자이너를 찾을 수 있습니다."}/>
        <section>
          <DesignerCard isHired={false} />
          <DesignerCard isHired={false} />
          <DesignerCard isHired={false} />
          <DesignerCard isHired={false} />
          <DesignerCard isHired={false} />
          <DesignerCard isHired={false} />
        </section>
      </div>
    );
}
