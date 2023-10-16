import nodeFetch from 'node-fetch'
const qq = async () => {
    // const response = await nodeFetch('https://github.com/');
    const response = await nodeFetch('https://flutter.dev/');
    const body = await response.text();

    // console.log(body);
}
qq()


/**
 * fetch网站Referer处理
 */
// fetch('https://www.qq.com').then(e => e.text()).then(f => {
// fetch('https://flutter.dev/').then(e => e.text()).then(f => {
fetch('https://m.douban.com/rexxar/api/v2/movie/recommend?refresh=0&start=0&count=20&selected_categories=%7B%7D&uncollect=false&tags=', {
    headers: {
        'Referer': 'https://movie.douban.com/explore'
    }
}).then(e => e.text()).then(f => {
    console.log('hhh', console.log(f))
})