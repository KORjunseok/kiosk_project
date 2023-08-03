import validator from 'express-validator';
const { body, validationResult } = validator;

//단일 요청에 유효성 검사
const validate = function (req, res, next) {
  //req 객체들을 검증하고 오류인걸 errors 변수로 할당
  const errors = validationResult(req);
  //만약 오류가 없다면 다음 미들웨어로 전달
  if (errors.isEmpty()) {
    next();
  }
  //오류가 있다면 400 코드를 설정하고 json(메시지를 생성)
  else {
    res.status(400).json({
      //에러 메세지는 errors배열을 순회하며 오류 메시지를 생성.
      errorMessage: errors.array().map((v, idx) => `${v.msg}`),
    });
  }
};


// 회원가입 설정
const defaultValidate = {
  createUser: [
    body('nickname').trim().notEmpty().withMessage('미입력 항목이 있습니다. 입력한 후 제출해 주세요.'),
    body('password')
      .custom((value, { req }) => {
        if (value != req.body.confirm) {
          throw new Error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        } else {
          return value;
        }
      })
      .matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/)
      .withMessage(
        '비밀번호는 최소 4자 이상 최대 12자로 숫자, 문자, 특수문자가 필요합니다.'
      ),
      validate,
  ],
  // 상품 추가 
  createItem : [
    body('name').trim().notEmpty().withMessage('상품 이름을 입력해 주세요.').matches(/^[^0-9]+$/).withMessage('문자열 타입을 지정해주세요.'),
    body('price').trim().notEmpty().withMessage('상품 가격을 입력해 주세요.').isNumeric().withMessage('숫자열 타입을 지정해주세요.'),
    validate,
  ],


};

export default defaultValidate;
