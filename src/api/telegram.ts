const baseURL =
  "https://api.telegram.org/bot7432424907:AAFd2WWsX5Af2jA_cdXXSs480CMxREA52N8/";

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseURL}sendMessage?chat_id=-4127555787&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(
      error.description || "Щось пішло не так при відправленні данних..."
    );
  }
};
