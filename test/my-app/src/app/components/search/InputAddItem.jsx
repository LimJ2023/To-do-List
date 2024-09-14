function InputAddItem({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="할 일을 입력해주세요."
            className="add-item font-regular-16px"
            value={value}
            onChange={onChange}
        />
    );
}

export default InputAddItem;
