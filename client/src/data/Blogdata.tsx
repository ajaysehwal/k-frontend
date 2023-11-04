import blog1 from "../img/blog-1.jpg";
import blog2 from "../img/blog-2.jpg";
import blog3 from "../img/blog-3.jpg";
import admin from  "../img/admin.jpg";
interface BlogDataStructure{
    img:string,
    admin_img:string,
    heading:string,
    name:string,
    p:string,
    comment:number
    date:string;
}
export const BlogData:Array<BlogDataStructure>=[
    {
    img:blog1,
    admin_img:admin,
    heading:"Web Design",
    name:"Daniel Martin",
    p:"Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit ame",
    comment:5,
    date:"23 April 2023"
},
{
    img:blog2,
    admin_img:admin,
    heading:"Web Design",
    name:"Daniel Martin",
    p:"Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit ame",
    comment:5,
    date:"23 April 2023"
},
{
    img:blog3,
    admin_img:admin,
    heading:"Web Design",
    name:"Daniel Martin",
    p:"Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit ame",
    comment:5,
    date:"23 April 2023"
}

]