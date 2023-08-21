import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        className="drop-shadow-lg"
        direction="row"
        sx={{
            overflow: "auto",
            height: { sx: "auto", md: "80%" },
            flexDirection: { md: "column" },
            backgroundColor: "#827689",
            borderRadius: '20px',
            margin: "15px",
            padding: "5px",
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn odisseia"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    backgroundColor: "b394c4",
                    background: category.name ===
                        selectedCategory && "#c9b6e7",
                    color: "white"
                }}
                key={category.name}
            >
                <span style={{
                    color: category.name
                        === selectedCategory ? "white" :
                        "#c9b6e7", marginRight: "15px"
                }}>
                    {category.icon}
                </span>
                <span style={{
                    opacity: category.name
                        === selectedCategory ? '1' :
                        '0.8'
                }}>
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
)

export default Sidebar;