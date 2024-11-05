import errorImage from './../../assets/errorImage.jpg'
function ErrorPage() {
    return (
        <div className='max-h-[600px] max-w-[800px] mx-auto mt-40'>
            <img className='w-full h-full' src={errorImage} alt="" />
        </div>
      )
}

export default ErrorPage
