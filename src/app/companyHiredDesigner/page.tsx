import "./companyHiredDesigner.page.scss";
import DesignerCard from "@/src/components/DesignerCard";
import ContentHeader from "@/src/components/ContentHeader";

export default function Page() {
  // const company: boolean = true
  return (
    <div className="content hired-designer">
      <ContentHeader h3={"고용중인 디자이너"} p={"고용된 디자이너의 근로상태 또는 할당된 일감을 확인하세요."}/>
      <section>
        <DesignerCard isHired={true} />
        <DesignerCard isHired={true} />
        <DesignerCard isHired={true} />
        <DesignerCard isHired={true} />
        <DesignerCard isHired={true} />
        <DesignerCard isHired={true} />
      </section>
    </div>
  );
}
