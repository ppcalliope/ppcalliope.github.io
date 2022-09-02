// import LazyLoading from '@/components/LazyLoadingView/LazyLoading'
import LazyLoading from './LazyLoading'
import Loadable from 'react-loadable'

//React Router Code Spliting 
let Loading = (url) => {
    return Loadable({
        // loader: () => import(`@/pages/${url}`),
        loader: () => import(`../../pages/${url}`),
        loading: LazyLoading
    });
}
export default Loading