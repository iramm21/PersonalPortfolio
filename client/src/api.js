import axios from "axios";

// Base URL for API
const API_BASE_URL = "http://localhost:3001";

// Categories API
export const getCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
  return response.data;
};

// Projects API
export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`);
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
  return response.data;
};

export const getFeaturedProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects/featured`);
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
  return response.data;
};

// Services API
export const getServices = async () => {
  const response = await axios.get(`${API_BASE_URL}/services`);
  return response.data;
};

export const createService = async (serviceData) => {
  const response = await axios.post(`${API_BASE_URL}/services`, serviceData);
  return response.data;
};

// Testimonials API
export const getTestimonials = async () => {
  const response = await axios.get(`${API_BASE_URL}/testimonials`);
  return response.data;
};

export const createTestimonial = async (testimonialData) => {
  const response = await axios.post(
    `${API_BASE_URL}/testimonials`,
    testimonialData
  );
  return response.data;
};
