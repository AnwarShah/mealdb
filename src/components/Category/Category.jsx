const Category = ({categoryData}) => {
    const {idCategory: id, strCategory: name, strCategoryDescription: description, strCategoryThumb: image} = categoryData;

    return (
        <div className="bg-blue-200 rounded-lg p-8">
            <h4 className="text-2xl font-medium">{name}</h4>
            <img className="py-4" src={image} alt={`${name}-image`} />
            <p>{description}</p>
        </div>
    );
};

export default Category;