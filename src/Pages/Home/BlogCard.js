import React from 'react';

const BlogCard = ({blog}) => {
    const { title, img, description } = blog;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="blog" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;