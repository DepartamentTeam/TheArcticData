import ContentLoader from 'react-content-loader'



export const MapSceleton = () => {
    <ContentLoader
    className='sceleton'
    width={450}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
  >  
  <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
  </ContentLoader>
}