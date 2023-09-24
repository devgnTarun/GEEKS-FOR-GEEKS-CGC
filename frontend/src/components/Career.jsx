import career from '../images/career.jpg'


const Career = () => {
  return (
    <>
        <div id="career" className="career_page">
            <h1>Want to be our volunteer?</h1>

           <div className="career_card">
           <div className="career_content">
                <p className='text-gray-600'>
                deserunt, iusto cupiditate quam nihil nulla sit at optio ratione distinctio labore impedit? Aliquam veritatis qui nihil! Aliquam nulla magni iste, sunt molestiae temporibus est excepturi impedit exercitationem itaque quidem dolore, optio, quas mollitia commodi rem. Qui voluptatum suscipit eveniet, autem ducimus quis cupiditate iusto ratione ullam consequuntur totam incidunt, beatae aliquid deserunt animi modi, ad temporibus quia.
                </p>
                <a  className="w-[150px] text-center bg-[#2f8d46] border-solid border border-transparent text-m text-white border-solid rounded-xl py-2 px-7 hover:bg-transparent hover:text-[#2f8d46]  hover:border-[#2f8d37]" href="#contact">Contact</a>
             </div>
             <div className="career_image">
                <img src={career} alt="" />
             </div>
           </div>
        </div>
    </>
  )
}

export default Career