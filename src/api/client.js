const API_URL = import.meta.env.VITE_API_URL || "/api";
export async function api(path, options={}){
  const token=localStorage.getItem("kh_token");
  const headers={"Content-Type":"application/json",...(options.headers||{})};
  if(token) headers.Authorization="Bearer "+token;
  const res=await fetch(API_URL+path,{...options,headers});
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.message||"حدث خطأ في الاتصال");
  return data;
}