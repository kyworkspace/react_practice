export const SET_LOADING = 'loading/SET_LOADING';
export const RESET_LOADING = 'loading/RESET_LOADING';

export const setLoading = loading =>({
    type : SET_LOADING,
    payload : loading,
})

export const resetLoading = () =>({
    type : RESET_LOADING,
});
//초기화 기능에는 payload가 필요하지 않으므로 type만 반환함