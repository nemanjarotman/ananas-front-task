import { FC, useState, ChangeEvent } from 'react'
import withLogging from 'hocs/withLogging/withLogging'
import styles from './styles.module.scss'

interface ISearchInputProps {
  onSearch: (query: string) => void
}
const Search: FC<ISearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default withLogging(Search)
