const sorter = (dispalyedNotes, order, originalNotes) => {
    if (order === 'default') return originalNotes;

    return dispalyedNotes.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        return (order === 'ascending') ? dateB - dateA : dateA - dateB;
    });
}

export default sorter;