import React from "react";
import { RsWrapper } from "../styles/commonComponents";
import useWidth from "../hooks/useWidth";
import MySlide from "../components/global/MySlide";
import LibSlide from "../components/global/LibSlide";
import MainView1 from "../components/design/MainView1";

const Shell = () => {
  const rsWidth = useWidth();

  return (
    <>
      <LibSlide
        imgArr={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDWMMPlcwhVgJ_jRrqe6jd2k1XHFKBaDnMg&usqp=CAU",
          "https://images.mypetlife.co.kr/content/uploads/2017/12/09160633/Dognews-1.jpg",
          "https://www.dog-zzang.co.kr/dog_sale/photo/202301/1672732756_36435900.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW_Ie5Ks6gnQOAjUfPpT3t6VySJhUzd6QLw&usqp=CAU",
        ]}
      />

      <RsWrapper width={rsWidth > 700 ? "1355px" : "100%"}>
        <MainView1 />
        <div>안녕하세요</div>
      </RsWrapper>
    </>
  );
};

export default Shell;
