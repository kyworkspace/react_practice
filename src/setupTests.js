import { configure } from 'enzyme';
//enzyme 설정함수 configure를 임포트함
import Adapter from  'enzyme-adapter-react-16.3';
//리액트 16.3 생명주기 라이브러리를 임포트함

import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();
//아프로디테의 DOM 함수호출과정을 중지 시킴

configure({adapter : new Adapter()});
//경고 메시지를 오류로 인식하도록 설정

afterEach(()=>{
    console.error.mockClear();
})

beforeEach(()=>{
    jest.spyOn(console,'error').mockImplementation((e)=>{
        throw new Error(e);
    });
});
  