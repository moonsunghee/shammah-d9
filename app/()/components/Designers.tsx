import ContainerHeader from "@/components/ContainerHeader";

export default function Designers() {
  const title="삼마디자이너 리스트";
  const headcopy="삼마디자인의 디자이너와 개발자를 소개합니다.";
  return (
    <div className="content">
      <ContainerHeader h3={title} p={headcopy}/>
    </div>
  );
}
