
interface Title {
    title: string
 }
function Button(props:Title){
   return(
        <div className='p-10'>
            <button className='bg-transparent text-white hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded'>{props.title}</button>
        </div>
   )
    
}

export default Button