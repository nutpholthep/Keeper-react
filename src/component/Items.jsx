import PropTypes from 'prop-types'

function Items({title,content,id,fnDel}) {
    
  return (
    <div className='p-6 bg-white drop-shadow-xl rounded-lg'>
        <h2 className='text-2xl font-semibold '>{title}</h2>
        <p>{content}</p>
        <p className='text-lg text-yellow-400 font-bold text-right transition-all hover:-translate-y-1 hover:-translate-x-5 hover:scale-110 cursor-pointer' onClick={()=>{ fnDel(id) } }>DELETE</p>
    </div>
  )
}
Items.propTypes = {
    title:PropTypes.string,
    content:PropTypes.string,
    id:PropTypes.number,
    fnDel:PropTypes.func
}

export default Items
