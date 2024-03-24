import { useDispatch, useSelector } from 'react-redux';
import { deleteStatementThunk } from '../../redux/studentsOperations';

export const StudentItem = ({ studentItemData, openModal }) => {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectFavouriteCars);

  const { name, course, specialty, statement, email, id } = studentItemData;

  const deleteStatement = id => {
    dispatch(deleteStatementThunk(id));
  };

  return (
    <li>
      <p>{name}</p>
      <p>{email}</p>
      <div>
        <p>{course}</p>
        <p>{specialty}</p>
      </div>
      <p>statement{statement}</p>
      <button onClick={() => deleteStatement(id)}>Видалити</button>
    </li>
    // <StyledCarItem>
    //   <FavoutiteBtn onClick={() => addToFavourite(carItemData)} type="button">
    //     {favourite ? (
    //       <HeartChec className="icon" />
    //     ) : (
    //       <Heart className="icon" />
    //     )}
    //   </FavoutiteBtn>
    //   <StyledImgWrapper>
    //     <StyledCarImg src={img} alt={model} />
    //   </StyledImgWrapper>
    //   <StyledTitleWrapper>
    //     <h2 className="car-title">
    //       {make} <span className="acsent-color">{model}</span>, {year}
    //     </h2>
    //     <p className="car-title"> {rentalPrice}</p>
    //   </StyledTitleWrapper>
    //   <StyledShortInfo>{`${addressPart[1].trim()} | ${addressPart[2].trim()} | ${rentalCompany} | ${type} | ${make} | ${mileage.toLocaleString(
    //     'en-US'
    //   )} | ${functionalities[0]}`}</StyledShortInfo>
    //   <StyledMoreButton type="button" onClick={openModal}>
    //     Learn more
    //   </StyledMoreButton>
    // </StyledCarItem>
  );
};
