import { useCart } from '../component/Contextapi'

const Order = () => {
  const { fetchfood } = useCart()

  return (
    <div>
      {fetchfood && fetchfood.length > 0 ? (
        fetchfood.map((item) => (
          <div key={item._id ?? item.id}>{item.name}</div>
        ))
      ) : (
        <div>No orders available</div>
      )}
    </div>
  )
}

export default Order
