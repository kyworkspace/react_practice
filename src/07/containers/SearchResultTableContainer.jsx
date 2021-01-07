import { connect } from "react-redux";
import SearchResultTable from "../SearchResultTable";

const mapStateToProp = (state) => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false
  ); //검색항목이 있는지 검색

  const { ids, entities } = collection;
  const items = ids
    .map((id) => entities[id])
    .filter(
      (entity) =>
        !hasFilter || //검색단어가 없으면 모든 목록 반환
        Object.entries(searchFilter).reduce(
          //filter 함수는 참값인 데이터만 추출, reduce 함수를 사용해서 데이터 항목의 조건을 모두 만족하는 경우에만 참값 반환
          (result, [key, value]) =>
            result && (!value || `${entity[key]}` === `${value}`),
          true
        )
    );

  return { items };
};

export default connect(mapStateToProp)(SearchResultTable);
