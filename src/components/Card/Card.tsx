import Image from 'next/image';
import React from 'react';
import './Card.css';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

function Card({ title, desc, img, tags }: PropsType) {
  return (
    <div className="card">
      <div>
        <Image
          className="card-image"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            // Change className from "tag" to "tags"
            <span className="tags" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;