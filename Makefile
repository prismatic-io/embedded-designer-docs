
# Verify that there are no references to Prismatic in the codebase
check-prismatic-references:
	@echo "Checking for references to Prismatic..."
	./scripts/check-prismatic-references.sh

# Check spelling
check-spelling:
	@echo "Checking spelling..."
	npm run check-spelling

# Check markdown formatting
check-markdown:
	@echo "Checking markdown formatting..."
	npm run check-markdown

# Check code formatting
check-js:
	@echo "Checking code formatting..."
	npm run check-js

# Runs all checks that are run in the CI/CD pipeline
check: check-prismatic-references check-spelling check-markdown check-js

generate-public-connector-docs:
	npm run generate-public-connector-docs
