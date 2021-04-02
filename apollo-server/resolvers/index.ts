import { Category } from "../../interfaces";

const API_URL = 'http://localhost:4000/categories'

export const resolvers = {
    Query: {
        getCategories: async (): Promise<Category[]> => {
            try {
                const resp = await fetch(`${API_URL}`);
                let categories: Category[] = await resp.json();
                return categories
            } catch (error) {
                throw error;
            }
        },
        getCategory: async (_: any, args: { name: string }): Promise<Category> => {
            try {
                const resp = await fetch(`${API_URL}?name=${args.name}`);
                let category: Category = await resp.json();
                return category[0]
            } catch (error) {
                throw error;
            }
        },
        getCategoryById: async (_: any, args: { id: string }): Promise<Category> => {
            try {
                const resp = await fetch(`${API_URL}/${args.id}`);
                let category: Category = await resp.json();
                return category[0]
            } catch (error) {
                throw error;
            }
        }
    },
};
