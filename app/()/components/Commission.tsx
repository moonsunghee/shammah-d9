import ContainerHeader from "@/components/ContainerHeader";

export default function Commission() {
  const title="웹사이트 제작 의뢰";
  const headcopy="커스텀제작 또는 솔루션제작 의뢰를 받습니다.";
  return (
    <div className="content">
      <ContainerHeader h3={title} p={headcopy}/>
    </div>
  );
}
