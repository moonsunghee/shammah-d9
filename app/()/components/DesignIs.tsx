import ContainerHeader from "@/components/ContainerHeader";

export default function DesignIs() {
  const title = "What is Design?";
  const headcopy = "디자인이란 계획하고 설계하는 행위 입니다."
  return (
    <div className="content designIs">
      <ContainerHeader h3={title} p={headcopy}/>
      <section>
        <div className="imgBox"></div>
        <div className="txtBox">
          <h4>디자인 : [계획하다, 설계하다]</h4>
          <p>
            디자인은 무엇인가 예쁘게 만들거나 편리하게 만드는 일이 아닌 무엇인가 계획하거나 설계하는 일련의 일을 의미 합니다.
            디자이너는 고객의 요구사항과 사용자의 필요를 분석하고 파악하여 그 요구사항과 필요를 구체화 하고 형상화 하는데 있어 체계적인 계획과 설계를 하는 사람입니다.
            삼마디자인에서 디자이너는 설계자, 디자이너, 개발자등 모든 역할을 디자이너로 명하고 있습니다.
            고객의 필요를 파악하고 요구사항을 분석하여 최적의 결과를 만들수 있도록 계획하고 설계하는 인재와 함께 하세요.
          </p>
        </div>
      </section>
    </div>
  );
}

