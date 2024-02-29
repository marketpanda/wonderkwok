"use client"
import { useState, useEffect } from 'react'

const page = () => {
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('chicken')

    useEffect(() => {
        
      const constRecipes = async() => {
        try {        
            const httpoptions = {
                headers: new Headers({
                    'Accept' : 'text/html',
                    'Content-Type': 'text/plain; charset=utf-8'
                }),
                responseType: 'text' as 'json'
            }
            const getRecipes = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${searchQuery}&offset=12`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': process.env.NEXT_PUBLIC_RECIPE_API as string,
                    'Accept':'text/html',
                    'Content-Type': 'application/json'
                }
            })
            const data = await getRecipes.json()
            console.log(data) 
            setRecipes(data)
    
          } catch (error) {
            console.log(error)
          }
      }
      constRecipes()
    
      return
    }, [searchQuery])
    
    const getRecipe = () => { 
        console.log(searchQuery)
    }

    return (
       <div className='max-w-2xl mx-auto'> 
            <section >
                <div className='flex flex-col mt-1 gap-1'>
                    <input className='w-full p-2 border border-gray-100 outline-none' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button  onClick={() => getRecipe() } className='text-white font-semibold bg-purple-800 rounded flex items-center justify-center py-2'>Search</button>
                </div>
            </section>
            <section>
                <div className='text-xs opacity-70'>
                    <pre className='break-words'>{recipes && JSON.stringify(recipes, null, 2)}</pre>
                </div>
            </section>
        </div>
 
    )
}

export default page