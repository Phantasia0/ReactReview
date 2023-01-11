import { createContext, useContext } from "react";

//클라이언트 환경: null
//서버 환경 : {done: false, promises: []}
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve는 함수 타입입니다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

//PreloadContext 는 서버 사이드 렌더링을 하는 과정에서 처리해야 할 작업들을 실행, 만약 기다려야 하는 프로미스가 있다면 프로미스를 수집
//수집된 프로미스들이 끝날 때까지 기다렸다가 그 다음에 다시 렌더링하면 데이터가 채워진 상태로 컴포넌트가 나타난다
