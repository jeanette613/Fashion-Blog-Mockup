import { Link } from "react-router-dom";

export default function Article(props) {
    const articles = [
        { index: "1", date: "11/12/20", title: "On the Street in Brooklyn", img: "https://sfs-madeline.herokuapp.com/fashionblog/blog-image-1.jpg", altImg: "Person walking in dress down empty sidwalk", entry: "orem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, enim suscipit odio at cum exercitationem est fugiat nostrum et fuga quibusdam soluta magnam perspiciatis temporibus aliquam quo ipsam repellendus reiciendis. Inventore modi doloribus ex praesentium similique velit rerum perferendis accusantium soluta quae. Suscipit dolorem et quae animi qui ullam porro tenetur veniam iusto sed minima a, numquam harum tempore debitis. Assumenda animi inventore sapiente. Rem nulla itaque quisquam corporis quis, ipsa quidem sit sint repellendus a quas suscipit eos voluptatibus deleniti at ipsam, ullam atque aspernatur illum quia nostrum voluptates. Quis suscipit ut commodi at alias delectus consequuntur eius placeat veniam corporis voluptate aspernatur optio culpa exercitationem, error voluptatem quidem repudiandae explicabo molestias blanditiis dolores dolorum neque accusantium? Quidem, saepe! Ut, placeat cumque? Eligendi, aperiam labore ipsum soluta excepturi recusandae. Ipsum, ullam officiis! Laborum assumenda amet enim vero, dicta accusantium hic at a quibusdam voluptatem cum aspernatur illum sit libero!" },
        { index: "2", date: "11/11/20", title: "Vintage in Vogue", img: "https://sfs-madeline.herokuapp.com/fashionblog/blog-image-2.jpg", altImg: "Faces of three people in vintage style clothes", entry: "orem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, enim suscipit odio at cum exercitationem est fugiat nostrum et fuga quibusdam soluta magnam perspiciatis temporibus aliquam quo ipsam repellendus reiciendis. Inventore modi doloribus ex praesentium similique velit rerum perferendis accusantium soluta quae. Suscipit dolorem et quae animi qui ullam porro tenetur veniam iusto sed minima a, numquam harum tempore debitis. Assumenda animi inventore sapiente. Rem nulla itaque quisquam corporis quis, ipsa quidem sit sint repellendus a quas suscipit eos voluptatibus deleniti at ipsam, ullam atque aspernatur illum quia nostrum voluptates. Quis suscipit ut commodi at alias delectus consequuntur eius placeat veniam corporis voluptate aspernatur optio culpa exercitationem, error voluptatem quidem repudiandae explicabo molestias blanditiis dolores dolorum neque accusantium? Quidem, saepe! Ut, placeat cumque? Eligendi, aperiam labore ipsum soluta excepturi recusandae. Ipsum, ullam officiis! Laborum assumenda amet enim vero, dicta accusantium hic at a quibusdam voluptatem cum aspernatur illum sit libero!" },
    ];

    return (
        <div className="article">
            {
                articles.map((article) => {
                    const { date, title, img, altImg, entry } = article;
                    return (
                        <article>
                            <h3>{date}</h3>
                            <h4>{title}</h4>
                            <img
                                src={img}
                                alt={altImg}
                            />
                            <p>{entry}</p>
                            <h5>Continues...</h5>
                        </article>
                    );
                })}
        </div>
    );
};