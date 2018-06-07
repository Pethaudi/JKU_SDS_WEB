if test $# -ne 1
then
	echo "parameter error"
	echo "js [projectname]"
	exit 0
fi

touch src/js/$1.js
cat ./scripts/.jsexample.js >> src/js/$1.js