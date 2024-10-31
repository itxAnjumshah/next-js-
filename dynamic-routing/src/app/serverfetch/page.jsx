import Link from "next/link";


async function getposts() {
  let userdata = await fetch("https://jsonplaceholder.typicode.com/posts");
  userdata = await userdata.json();
  return userdata;  
}

const Page = async () => { // Use capital 'P' for component names
  let posts = await getposts(); // Use plural 'posts' for clarity

  return (
    <>
      <h1 className='bg-blue-300 text-red-500'>Server Side Fetch API</h1>
      <table className="  border-black border-4"> {/* Wrap the <tr> in a <table> */}
        <thead>
          <td>id</td> 
          <td>title</td>
          <th>body</th>
        </thead>
        <tbody>
          {
            posts.slice(0,10).map((item) => (
              <tr key={item.id} className="border-4 border-red-700"> 
                <td  className="border-4 border-black" >{item.id}</td> 
                <td className="border-4 border-black" >{item.title}</td>
                <td className="border-4 border-black" >{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link href="/">back to home</Link>
    </>
  )
}

export default Page;
