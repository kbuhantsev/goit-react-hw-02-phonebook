import React from 'react';
interface IProps {
  onInput(value: string): void;
}

const styles = {
  input:
    'bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-0.5 px-1 ml-2',
};

export const Filter: React.FC<IProps> = ({ onInput }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onInput(value);
  };

  return (
    <label className="flex dark:text-white" htmlFor="search">
      Find contacts by name:
      <input
        className={styles.input}
        name="search"
        onChange={handleInput}
      ></input>
    </label>
  );
};
