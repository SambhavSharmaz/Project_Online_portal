const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

useEffect(() => {
  const fetchExam = async () => {
    try {
      const { data } = await axios.get(`/api/exams/${id}`);
      setExam(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch exam');
      setLoading(false);
    }
  };

  fetchExam();
}, [id]);

if (loading) return <Spin size="large" />;

if (error) return <div>{error}</div>;
