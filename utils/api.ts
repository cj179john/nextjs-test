export const fetchData = async (url: string) => {
    const res = await fetch(url);
    if (res.status !== 200) {
        return null;
    }

    return await res.json();
};