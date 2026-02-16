"use client";
import Link from "next/link";
import React from "react";
import Loader from "../../Components/Loader";
import { useEffect, useState} from "react";

export default function Blogslug({params}) {

  
  const [fetchedblog, setfetchedblog] = useState({})
    const [loading, setLoading] = useState(false)
  

//   useEffect(() => {
//     const availableblogs = async () => {
//       try {
        
//         const {slug} = await params;
//         const res = await fetch(`https://devzaidbackend.onrender.com/api/content/blogs/${slug}`, {
//           cache: "no-store",
//         });
        
//         if (!res.ok){
//           setLoading(false)
//           return 
//         } 
//         const data = await res.json();
//         setfetchedblog(data)
//       } catch (error) {
//         console.log("Error fetching blog:", error)
//       } finally {
//       setLoading(false)
//     } 
//     }

// availableblogs()
//   }, [params])

  return (
    <main>
        
      {loading? <div class="min-h-[70vh] flex items-center justify-center">
    <Loader />
</div>
:
      <article className="max-w-3xl mx-auto py-5">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-(--maincolor) mb-3 text-center mb-5">
          {"Pandas - A Python Library"}
        </h1>

        {/* Content */}
        <div className='space-y-4'>        
        <div className="prose prose-slate max-w-none text-(--text)">
          {"Pandasis the library pf puthon which use in read csv and roe=ws of data which helps in python Chalo bhai, ab Pandas ko full detail me samajhte hain, lekin simple WhatsApp style me 😄Agar tum Python me data ke saath kaam karna chahte ho (jaise Excel sheet, CSV, JSON, database data etc.), to Pandas tumhara sabse bada weapon hai."}
        </div>
        <div className="prose prose-slate max-w-none my-6 md:my-0 text-(--text)">
          {"Pandasis the library pf puthon which use in read csv and roe=ws of data which helps in python Chalo bhai, ab Pandas ko full detail me samajhte hain, lekin simple WhatsApp style me 😄Agar tum Python me data ke saath kaam karna chahte ho (jaise Excel sheet, CSV, JSON, database data etc.), to Pandas tumhara sabse bada weapon hai.Pandasis the library pf puthon which use in read csv and roe=ws of data which helps in python Chalo bhai, ab Pandas ko full detail me samajhte hain, lekin simple WhatsApp style me 😄Agar tum Python me data ke saath kaam karna chahte ho (jaise Excel sheet, CSV, JSON, database data etc.), to Pandas tumhara sabse bada weapon hai."}
        </div>
        <div className="prose prose-slate max-w-none text-(--text) mt-3.5">
          {"Pandasis the library pf puthon which use in read csv and roe=ws of data which helps in python Chalo bhai, ab Pandas ko full detail me samajhte hain, lekin simple WhatsApp style me 😄Agar tum Python me data ke saath kaam karna chahte ho (jaise Excel sheet, CSV, JSON, database data etc.), to Pandas tumhara sabse bada weapon hai."}
        </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/Technologies"
            className="text-(--maincolor) underline text-sm"
          >
            ← Back to Page
          </Link>
        </div>

      </article> }

    </main>
  );
}
