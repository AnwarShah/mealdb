const Category = ({categoryData}) => {
    const {idCategory: id, strCategory: name, strDescription: desc, strThumb: image} = categoryData;

    return (
        <div className="bg-blue-200 rounded-lg p-8">
            <h4 className="text-2xl font-medium">{name}</h4>
        </div>
    );
};

export default Category;